<template>
  <data-table
    :headers="headers"
    :getItems="getItems"
    :findItem="findByIdItem"
    :updateItem="editByIdItem"
    :removeItem="deleteByIdItem"
  />
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  import DataTable from "@/components/DataTable/DataTable.vue";
  import { fetchItems, findItem, editItem, deleteItem } from "../services";
  import { ModelHeaderTable } from "@/commons/types";
  import { ModelItems } from "../types";

  @Component({
    components: {
      DataTable,
    },
  })
  export default class Crud extends Vue {
    protected headers: ModelHeaderTable[] = [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Actions", value: "actions", sortable: false },
    ];

    protected async getItems(): Promise<{
      items: ModelItems[];
      totalItems: number;
    }> {
      return await fetchItems();
    }

    protected async findByIdItem(/*uuid: string*/): Promise<ModelItems> {
      return await findItem(/*uuid*/);
    }

    protected async editByIdItem(/*uuid: string*/): Promise<ModelItems> {
      return await editItem(/*uuid*/);
    }

    protected async deleteByIdItem(/*uuid: string*/): Promise<{
      delete: number;
    }> {
      return await deleteItem(/*uuid*/);
    }
  }
</script>
