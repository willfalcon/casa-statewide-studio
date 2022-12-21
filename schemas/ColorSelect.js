import React, { useState, useEffect } from 'react';
import { Card, Stack, Select } from '@sanity/ui';
import { FormField } from '@sanity/base/components';
import sanityClient from 'part:@sanity/base/client';
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';

const client = sanityClient.withConfig({ apiVersion: '2022-06-06' });

const ColorSelect = React.forwardRef((props, ref) => {
  const [colors, setColors] = useState([]);

  const {
    type, // Schema information
    value, // Current field value
    readOnly, // Boolean if field is not editable
    markers, // Markers including validation rules
    presence, // Presence information for collaborative avatars
    compareValue, // Value to check for "edited" functionality
    onFocus, // Method to handle focus state
    onBlur, // Method to handle blur state
    onChange, // Method to handle patch events
  } = props;

  // Creates a change handler for patching data
  const handleChange = React.useCallback(
    // useCallback will help with performance
    event => {
      const inputValue = event.currentTarget.value; // get current value
      // if the value exists, set the data, if not, unset the data
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    },
    [onChange]
  );

  useEffect(() => {
    const getColorOptions = async () => {
      const { colorPalette } = await client.fetch(`*[_id == 'generalSettings'][0] {
        colorPalette
      }`);
      const colorArr = colorPalette.map(color => ({ title: color.label, value: color.color.hex }));
      setColors(colorArr);
    };
    getColorOptions();
  }, []);
  return (
    <FormField
      description={type.description} // Creates description from schema
      title={type.title} // Creates label from schema title
      __unstable_markers={markers} // Handles all markers including validation
      __unstable_presence={presence} // Handles presence avatars
      compareValue={compareValue} // Handles "edited" status
    >
      <Card padding={0}>
        <Stack>
          <Select
            fontSize={2}
            padding={[3, 3, 4]}
            space={[3, 3, 4]}
            value={value} // Current field value
            readOnly={readOnly} // If "readOnly" is defined make this field read only
            onFocus={onFocus} // Handles focus events
            onBlur={onBlur} // Handles blur events
            ref={ref}
            onChange={handleChange} // A function to call when the input value changes
          >
            <option value={''}>---</option>
            {colors.map(({ title, value }) => (
              <option key={value} value={value}>
                {title}
              </option>
            ))}
          </Select>
        </Stack>
      </Card>
    </FormField>
  );
});

export default ColorSelect;
