import { ModelItems } from "./types";

export const fetchItems = async (): Promise<{
  items: ModelItems[];
  totalItems: number;
}> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        items: [
          {
            uuid: "qe23e32e2rftgv345",
            name: "Frozen Yogurt",
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            uuid: "qe23e32e2rftgv345",
            name: "Ice cream sandwich",
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            uuid: "qe23e32e2rftgv345",
            name: "Eclair",
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            uuid: "qe23e32e2rftgv345",
            name: "Cupcake",
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            uuid: "qe23e32e2rftgv345",
            name: "Gingerbread",
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            uuid: "qe23e32e2rftgv345",
            name: "Jelly bean",
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            uuid: "qe23e32e2rftgv345",
            name: "Lollipop",
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            uuid: "qe23e32e2rftgv345",
            name: "Honeycomb",
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            uuid: "qe23e32e2rftgv345",
            name: "Donut",
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            uuid: "qe23e32e2rftgv345",
            name: "KitKat",
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
        ],
        totalItems: 100,
      });
    }, 1000)
  );
};

export const findItem = async (/*uuid: string*/): Promise<ModelItems> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        uuid: "qe23e32e2rftgv345",
        name: "Nome",
        calories: 12,
        fat: 532,
        carbs: 34,
        protein: 32,
      });
    }, 1000)
  );
};

export const editItem = async (/*uuid: string*/): Promise<ModelItems> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        uuid: "qe23e32e2rftgv345",
        name: "Nome",
        calories: 12,
        fat: 532,
        carbs: 34,
        protein: 32,
      });
    }, 1000)
  );
};

export const deleteItem = async (/*uuid: string*/): Promise<{
  delete: number;
}> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ delete: 1 });
    }, 1000)
  );
};
