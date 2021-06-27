import { SelectOption } from "../components/Select";
import { getOptionsFromStringArray } from "../model";
import { FilterField, SortByField } from "../model/Filters";

export const data: SelectOption<Company>[] = [
  {
    id: "Robel, Howell and Ryan",
    label: "Robel, Howell and Ryan",
    value: {
      name: "Robel, Howell and Ryan",
      email: "cartwright.augustus@halvorson.net",
      vat: "65288343",
      phone: "+1825176285518",
      country: "Yemen",
    },
  },
  {
    id: "Goodwin-Thiel",
    label: "Goodwin-Thiel",
    value: {
      name: "Goodwin-Thiel",
      email: "breana.nienow@gmail.com",
      vat: "5697259549",
      phone: "+9214668440275",
      country: "Mongolia",
    },
  },
  {
    id: "Schinner-Witting",
    label: "Schinner-Witting",
    value: {
      name: "Schinner-Witting",
      email: "nicole51@legros.info",
      vat: "76152267",
      phone: "+6235807902299",
      country: "Bosnia and Herzegovina",
    },
  },
  {
    id: "Casper LLC",
    label: "Casper LLC",
    value: {
      name: "Casper LLC",
      email: "lexie59@larson.com",
      vat: "44693527",
      phone: "+2637675704451",
      country: "Botswana",
    },
  },
  {
    id: "Kuvalis and Sons",
    label: "Kuvalis and Sons",
    value: {
      name: "Kuvalis and Sons",
      email: "corine.hoeger@glover.net",
      vat: "04949403838",
      phone: "+4367207252366",
      country: "Saint Kitts and Nevis",
    },
  },
  {
    id: "Hauck, Purdy and O'Reilly",
    label: "Hauck, Purdy and O'Reilly",
    value: {
      name: "Hauck, Purdy and O'Reilly",
      email: "karlie.west@hotmail.com",
      vat: "1211561975",
      phone: "+4367442086872",
      country: "Mayotte",
    },
  },
  {
    id: "McClure, Tremblay and Hegmann",
    label: "McClure, Tremblay and Hegmann",
    value: {
      name: "McClure, Tremblay and Hegmann",
      email: "johnston.alejandrin@yahoo.com",
      vat: "713530466",
      phone: "+6151498823654",
      country: "Austria",
    },
  },
  {
    id: "Ziemann, Sawayn and Howell",
    label: "Ziemann, Sawayn and Howell",
    value: {
      name: "Ziemann, Sawayn and Howell",
      email: "eveline.mayert@hotmail.com",
      vat: "21864814960",
      phone: "+2747194648915",
      country: "Slovenia",
    },
  },
  {
    id: "Buckridge Inc",
    label: "Buckridge Inc",
    value: {
      name: "Buckridge Inc",
      email: "ischaden@weimann.com",
      vat: "964208638",
      phone: "+4664064856654",
      country: "Afghanistan",
    },
  },
  {
    id: "Bogan and Sons",
    label: "Bogan and Sons",
    value: {
      name: "Bogan and Sons",
      email: "hsenger@yahoo.com",
      vat: "57451847161",
      phone: "+7751173943553",
      country: "Azerbaijan",
    },
  },
  {
    id: "Steuber Ltd",
    label: "Steuber Ltd",
    value: {
      name: "Steuber Ltd",
      email: "weimann.alexandria@hotmail.com",
      vat: "3434510110",
      phone: "+4192002825710",
      country: "Turkey",
    },
  },
  {
    id: "Hettinger PLC",
    label: "Hettinger PLC",
    value: {
      name: "Hettinger PLC",
      email: "haley.janick@stracke.com",
      vat: "8176343050",
      phone: "+6888655777612",
      country: "Kazakhstan",
    },
  },
  {
    id: "Macejkovic PLC",
    label: "Macejkovic PLC",
    value: {
      name: "Macejkovic PLC",
      email: "howell.pascale@franecki.com",
      vat: "297500500",
      phone: "+5277963505047",
      country: "Northern Mariana Islands",
    },
  },
  {
    id: "Simonis LLC",
    label: "Simonis LLC",
    value: {
      name: "Simonis LLC",
      email: "fschuster@yahoo.com",
      vat: "57335612792",
      phone: "+1711384082056",
      country: "French Southern Territories",
    },
  },
  {
    id: "Murphy Inc",
    label: "Murphy Inc",
    value: {
      name: "Murphy Inc",
      email: "glover.wilfredo@turner.com",
      vat: "2518462597",
      phone: "+9277288244800",
      country: "Norway",
    },
  },
  {
    id: "Hill, Crooks and Deckow",
    label: "Hill, Crooks and Deckow",
    value: {
      name: "Hill, Crooks and Deckow",
      email: "frodriguez@lowe.com",
      vat: "2046287219",
      phone: "+2676849544802",
      country: "Slovenia",
    },
  },
  {
    id: "Thiel-Heaney",
    label: "Thiel-Heaney",
    value: {
      name: "Thiel-Heaney",
      email: "paucek.addie@hotmail.com",
      vat: "0488052361",
      phone: "+2833371145765",
      country: "Belize",
    },
  },
  {
    id: "Jakubowski-Balistreri",
    label: "Jakubowski-Balistreri",
    value: {
      name: "Jakubowski-Balistreri",
      email: "golda.langworth@yahoo.com",
      vat: "7776181199",
      phone: "+6479605572508",
      country: "Djibouti",
    },
  },
  {
    id: "Schaefer LLC",
    label: "Schaefer LLC",
    value: {
      name: "Schaefer LLC",
      email: "egreenholt@cormier.org",
      vat: "99965755",
      phone: "+5118341195802",
      country: "Brunei Darussalam",
    },
  },
];

export interface Company {
  name: string;
  email: string;
  vat: string;
  phone: string;
  country: string;
}

export const optionsProvider = async (
  query: string
): Promise<SelectOption<Company>[]> => {
  const optionLowerCase = query.toLowerCase();
  return data
    .filter((option, index) =>
      option.label.toLowerCase().startsWith(optionLowerCase)
    )
    .filter((_, i) => i < 10);
};

export const fields: FilterField<any>[] = [
  { name: "isAdmin", type: "bool", label: "Администратор" },
  { name: "name", type: "text", label: "Имя" },
  {
    name: "company",
    type: "multipleAutocomplete",
    label: "Компания",
    optionsProvider,
  },
  {
    name: "gender",
    label: "Пол",
    type: "multipleSelect",
    options: getOptionsFromStringArray(["Мужской", "Женский"]),
  },
];

export const sortFields: SortByField[] = [
  { name: "isAdmin", label: "Администратор" },
  { name: "name", label: "Имя" },
  {
    name: "company",
    label: "Компания",
  },
  {
    name: "gender",
    label: "Пол",
  },
];
