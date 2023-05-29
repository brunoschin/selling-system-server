export function newID(): string {
    return Math.random().toString(36).substring(2, 9);
}