import fs from "node:fs/promises";
import {createFakeContact} from "../utils/createFakeContact.js";
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const parsedData = JSON.parse(data);
        for (let index = 1; index <= number; index++) {
            const contact = createFakeContact();
            parsedData.push(contact);
        }
        await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2));
    } catch (error) {
        console.log(error);
    }
};

generateContacts(5);
