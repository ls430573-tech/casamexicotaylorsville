import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "22",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/content"],
      models: [
        {
          name: "Menu",
          type: "data",
          label: "Restaurant Menu & Info",
          file: "src/content/menu.json",
          fields: [
            { name: "phone", type: "string", label: "Phone Number", required: true },
            { name: "phone_tel", type: "string", label: "Phone (tel: link)", required: true },
            { name: "address", type: "string", label: "Address", required: true },
            { name: "hours", type: "string", label: "Business Hours", required: true },
            {
              name: "sections",
              type: "list",
              label: "Menu Sections",
              items: {
                type: "object",
                fields: [
                  { name: "id", type: "string", label: "Section ID (slug)", required: true },
                  { name: "label", type: "string", label: "Section Label (Title)", required: true },
                  { name: "tab", type: "string", label: "Tab Label", required: true },
                  {
                    name: "color",
                    type: "enum",
                    label: "Color Theme",
                    options: [
                      { label: "Chili (Red)", value: "chili" },
                      { label: "Cactus (Green)", value: "cactus" },
                      { label: "Marigold (Yellow)", value: "marigold" },
                      { label: "Agave (Blue)", value: "agave" },
                      { label: "Mesa (Orange)", value: "mesa" },
                    ],
                    required: true,
                  },
                  { name: "blurb", type: "string", label: "Description / Subtitle" },
                  {
                    name: "groups",
                    type: "list",
                    label: "Item Groups",
                    items: {
                      type: "object",
                      fields: [
                        { name: "title", type: "string", label: "Group Title" },
                        { name: "note", type: "string", label: "Group Note (Optional)" },
                        {
                          name: "items",
                          type: "list",
                          label: "Group Items",
                          items: {
                            type: "object",
                            fields: [
                              { name: "n", type: "string", label: "Item Number (Optional)" },
                              { name: "name", type: "string", label: "Item Name", required: true },
                              { name: "desc", type: "string", label: "Item Description" },
                              { name: "price", type: "string", label: "Price", required: true },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    name: "items",
                    type: "list",
                    label: "Direct Items (Alternative to Groups)",
                    items: {
                      type: "object",
                      fields: [
                        { name: "n", type: "string", label: "Item Number (Optional)" },
                        { name: "name", type: "string", label: "Item Name", required: true },
                        { name: "desc", type: "string", label: "Item Description" },
                        { name: "price", type: "string", label: "Price", required: true },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "menu",
        publicPath: "/",
      },
    }),
  ],
});
