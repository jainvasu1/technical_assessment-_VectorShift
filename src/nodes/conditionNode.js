// conditionNode.js

import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'equals');
  const [value, setValue] = useState(data?.value || '');
  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleConditionChange = (e) => {
    const newCondition = e.target.value;
    setCondition(newCondition);
    updateNodeField(id, 'condition', newCondition);
  };

  const handleValueChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    updateNodeField(id, 'value', newValue);
  };

  useEffect(() => {
    updateNodeField(id, 'condition', condition);
    updateNodeField(id, 'value', value);
  }, []);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Condition"
      inputHandles={[{ id: `${id}-input`, name: 'input' }]}
      outputHandles={[
        { id: `${id}-true`, name: 'true' },
        { id: `${id}-false`, name: 'false' }
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px' }}>
          Condition:
          <select 
            value={condition} 
            onChange={handleConditionChange}
            style={{ padding: '4px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="equals">Equals</option>
            <option value="contains">Contains</option>
            <option value="greater">Greater Than</option>
            <option value="less">Less Than</option>
          </select>
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px' }}>
          Value:
          <input 
            type="text" 
            value={value} 
            onChange={handleValueChange}
            style={{ padding: '4px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
      </div>
    </BaseNode>
  );
}

