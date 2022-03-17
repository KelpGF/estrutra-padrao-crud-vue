<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :loading="isLoading"
      loading-text="Carregando..."
      sort-by="calories"
      class="elevation-1 text-body-1"
      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title
            class="text-h4 blue--text text--darken-1 font-weight-medium text-capitalize"
            >{{ $route.name }}</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn color="primary" dark left @click="insertItem()">
            <v-icon>mdi-plus</v-icon> Cadastrar
          </v-btn>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card color="primary">
              <v-card-title class="text-h6 white--text">
                Deseja realmente deletar este registro?
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="white darken-1" text @click="closeDelete">
                  Não
                </v-btn>
                <v-btn
                  color="red darken-1"
                  @click="deleteItemConfirm"
                  class="white--text"
                >
                  Sim
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogShow" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Items Data</v-card-title>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon class="mr-2 info--text" @click="showItem(item.uuid)">
          mdi-eye
        </v-icon>
        <v-icon class="mr-2 warning--text" @click="editItem(item.uuid)">
          mdi-pencil
        </v-icon>
        <v-icon class="red--text" @click="deleteItem(item.uuid)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-alert
          class="mt-2"
          border="top"
          colored-border
          type="info"
          elevation="2"
        >
          Nenhum registro encontrado
        </v-alert>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
        circle
        :total-visible="7"
        @input="loadItems"
      ></v-pagination>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import { ModelData } from "./types";
  import { ModelHeaderTable } from "@/commons/types";

  @Component
  export default class DataTable extends Vue {
    // @Prop() readonly ModelData!: void[];
    @Prop() readonly headers!: ModelHeaderTable[];
    @Prop() readonly getItems!: () => Promise<{
      items: ModelData[];
      totalItems: number;
    }>;
    @Prop() readonly findItem!: () => Promise<ModelData>;
    @Prop() readonly removeItem!: () => Promise<{ delete: number }>;

    protected items: ModelData[] = []; // all table items
    protected uuidItem = ""; // index item
    protected itemDefault: ModelData = {
      name: "",
      calories: -1,
      fat: -1,
      carbs: -1,
      protein: -1,
    }; // item default
    protected itemSelected: ModelData = { ...this.itemDefault }; // item to show or edit
    protected isLoading = true; // condition show load
    protected dialogShow = false; // condition show modal show
    protected dialogDelete = false; // condition show modal delete

    // pagination data
    protected page = 1;
    protected pageCount = 0;
    protected itemsPerPage = 15;

    protected async loadItems(page = this.page): Promise<void> {
      this.page = 1;
      this.pageCount = 0;
      this.isLoading = true;
      this.items = [];

      const response = await this.getItems();

      this.page = page;
      this.items = response.items;
      this.pageCount = Math.ceil(response.totalItems / this.itemsPerPage);
      this.isLoading = false;
    }

    protected async showItem(/*uuid: string*/): Promise<void> {
      this.isLoading = true;

      // pass uuid to service function
      this.itemSelected = await this.findItem();
      this.dialogShow = true;
      this.isLoading = false;

      console.log(this.itemSelected);
    }

    protected async editItem(uuid: string): Promise<void> {
      alert("/" + uuid);
    }

    protected deleteItem(uuid: string): void {
      this.uuidItem = uuid;
      this.dialogDelete = true;
    }

    protected async deleteItemConfirm(): Promise<void> {
      this.isLoading = true;

      // pass uuid to service function
      await this.removeItem();

      this.isLoading = false;
      this.dialogDelete = false;
      this.uuidItem = "";
      this.loadItems();
    }

    protected closeDelete(): void {
      this.dialogDelete = false;
    }

    protected insertItem(): void {
      alert("redirecionando para a rota de cadastro");
    }

    created(): void {
      this.loadItems();
    }
  }
</script>
