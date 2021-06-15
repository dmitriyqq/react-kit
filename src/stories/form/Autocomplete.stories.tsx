import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Autocomplete, Props } from "../../components/Autocomplete";
import {
  MultipleAutocomplete,
  Props as MultiProps,
} from "../../components/MultipleAutocomplete";
import { Company, data, optionsProvider } from "../autocompleteData";
import { Button } from "../../components/Button";

export default {
  title: "Autocomplete",
  component: Autocomplete,
} as Meta;

const Template: Story<Props<Company>> = (args) => {
  const [value, setValue] = useState<any>(null);
  return (
    <div>
      <Autocomplete {...args} value={value} onChange={setValue} />
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
};

export const AutocompleteStory = Template.bind({});
AutocompleteStory.args = {
  optionsProvider,
  name: "company",
};

const MultipleAutocompleteTemplate: Story<MultiProps<Company>> = (args) => {
  const [value, setValue] = useState<any>([]);
  return (
    <div>
      <MultipleAutocomplete {...args} onChange={setValue} value={value} />
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
};

export const MultiAutocompleteStory = MultipleAutocompleteTemplate.bind({});
MultiAutocompleteStory.args = {
  optionsProvider,
  name: "company-multi",
};

const AutocompleteTemplateControlled: Story<MultiProps<Company>> = (args) => {
  const [value, setValue] = useState<any>([]);

  const setAutocompleteValueExternally = (optionIndex: number) => {
    setValue(data[optionIndex]);
  };

  return (
    <div>
      <Autocomplete {...args} onChange={setValue} value={value} />
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <Button onClick={() => setAutocompleteValueExternally(0)}>
        {data[0].label}
      </Button>
      <Button onClick={() => setAutocompleteValueExternally(1)}>
        {data[1].label}
      </Button>
      <Button onClick={() => setAutocompleteValueExternally(2)}>
        {data[2].label}
      </Button>
    </div>
  );
};

export const AutocompleteControlledStory = AutocompleteTemplateControlled.bind(
  {}
);
AutocompleteControlledStory.args = {
  optionsProvider,
  name: "company-controlled",
};

const MultipleAutocompleteTemplateControlled: Story<MultiProps<Company>> = (
  args
) => {
  const [value, setValue] = useState<any>([]);

  const setAutocompleteValueExternally = (v: any) => {
    setValue(v);
  };

  return (
    <div>
      <MultipleAutocomplete {...args} onChange={setValue} value={value} />
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <Button onClick={() => setAutocompleteValueExternally([data[0]])}>
        {data[0].label}
      </Button>
      <Button
        onClick={() => setAutocompleteValueExternally([data[0], data[1]])}
      >
        {data[0].label} {data[1].label}
      </Button>
      <Button
        onClick={() =>
          setAutocompleteValueExternally([data[0], data[1], data[2]])
        }
      >
        {data[0].label} {data[1].label} {data[2].label}
      </Button>
    </div>
  );
};

export const MultipleAutocompleteStory = MultipleAutocompleteTemplateControlled.bind(
  {}
);
MultipleAutocompleteStory.args = {
  optionsProvider,
  name: "company-controlled-multiple",
};
