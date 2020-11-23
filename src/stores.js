import { writable, derived } from "svelte/store";
import { filterBySearchTerm } from "./lib/utils";

export const breeds = writable([]);

export const popularBreeds = writable([]);

export const searchTerm = writable("");

export const filteredBreeds = derived(
	[breeds, searchTerm],
	([$breeds, $searchTerm]) => {
		return filterBySearchTerm($breeds, $searchTerm.trim());
	}
);
