// mergeNode.js

import { BaseNode } from './BaseNode';

export const MergeNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Merge"
      inputHandles={[
        { id: `${id}-input1`, name: 'input1', style: { top: '30%' } },
        { id: `${id}-input2`, name: 'input2', style: { top: '70%' } }
      ]}
      outputHandles={[{ id: `${id}-output`, name: 'output' }]}
    >
      <div style={{ fontSize: '12px', color: '#666' }}>
        Merges two inputs into one output.
      </div>
    </BaseNode>
  );
}

