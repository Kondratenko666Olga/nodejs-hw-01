import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const contacts = JSON.parse(data);
        const counts = contacts.length;
        console.log("Total contacts is:", counts);
    } catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());
