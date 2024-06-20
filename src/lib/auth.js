import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { User } from "./models";
import { connectToDb } from "./utils";

export const {
    handlers: { GET, POST }, auth, signIn, signOut
} = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === "github") {
                connectToDb();
                try {
                    const user = await User.findOne({ email: profile.email });
                    if (!user) {
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            image: profile.avatar_url,
                        });
                        await newUser.save();
                    }
                } catch (err) {
                    console.log(err);
                    return false;
                }
            }
            return true;
        },
    },
})