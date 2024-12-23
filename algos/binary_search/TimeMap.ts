//! Bad solution
/* class TimeMap {
    private time_map: { [key: string]: any };

    constructor() {
        this.time_map = {};
    }

    set(key: string, value: string, timestamp: number): void {
        const map_key = `${key}:${timestamp}`;

        this.time_map[map_key] = value;
    }

    get(key: string, timestamp: number): string {
        const map_key = `${key}:${timestamp}`;

        return this.time_map[map_key];
    }
} */

//* Good solution
interface IMapItem {
    value: string;
    timestamp: number;
}

class TimeMap {
    private time_map: Map<string, IMapItem[]> = new Map();

    set(key: string, value: string, timestamp: number): void {
        const data: IMapItem[] | undefined = this.time_map.get(key);

        const new_data = { value, timestamp };

        if (!data) this.time_map.set(key, [new_data]);
        else data.push(new_data);
    }

    get(key: string, timestamp: number): string {
        const data: IMapItem[] | undefined = this.time_map.get(key);

        if (!data) return "";

        return this.binary_search(data, timestamp);
    }

    private binary_search(
        arr: { value: string; timestamp: number }[],
        timestamp: number
    ): string {
        let left = 0;
        let right = arr.length - 1;
        let mid = Math.floor((left + right) / 2);
        let closest: number | null = null;

        while (left <= right) {
            if (arr[mid].timestamp === timestamp) return arr[mid].value;
            else if (arr[mid].timestamp > timestamp) right = mid - 1;
            else {
                closest = mid;
                left = mid + 1;
            }

            mid = Math.floor((left + right) / 2);
        }

        return closest === null ? "" : arr[closest].value;
    }
}

/* 
? Testcase
^ [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
^ ["TimeMap","set","set","get","get","get","get","get"]
~ [null,null,null,"","high","high","low","low"]
*/

var obj = new TimeMap();
obj.set("love", "high", 10);
obj.set("love", "low", 20);

const calls: [string, number][] = [
    ["love", 5],
    ["love", 10],
    ["love", 15],
    ["love", 20],
    ["love", 25],
];

for (let k in calls) {
    console.log(obj.get(calls[k][0], calls[k][1]));
}
