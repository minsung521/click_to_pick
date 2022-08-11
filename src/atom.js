import { atom } from "recoil";

export const rStart = atom({
	key: "rStart",
	default: 1,
});
export const rEnd = atom({
	key: "rEnd",
	default: 33,
});

export const numArr = atom({
	key: "numArr",
	default: [],
});

export const initialClicked = atom({
	key: "initialClicked",
	defualt: 1,
});

export const allPickCount = atom({
	key: "allPickCount",
	default: 0,
});
