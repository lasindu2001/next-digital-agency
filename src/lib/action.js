"use server"

import { Post } from "./models";
import { connectToDb } from "./utils";

// export const sayHello = async () => {
//     "use server"
//     console.log("Hello World");
// }

export const addPost = async (formData) => {
    // const title = formData.get("title");
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    // console.log(title, desc, slug, userId);

    try {
        connectToDb();
        const newPost = new Post({ title, desc, slug, userId });
        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};