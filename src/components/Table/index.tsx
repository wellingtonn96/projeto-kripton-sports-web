import React from 'react';
import { useHistory } from 'react-router-dom';

import { DataTable, TableHeader, TableBody } from './style';

interface TableProps {
  header: string;
  url: string;
}

const Table: React.FC<TableProps> = ({ url, header, children }) => {
  const history = useHistory();

  return (
    <DataTable>
      <TableHeader>
        <h1>{header}</h1>
      </TableHeader>

      <TableBody>
        <div>
          <div>
            <input type="text" />
          </div>
          <button type="button" onClick={() => history.push(url)}>
            cadastar
          </button>
        </div>
        <div>{children}</div>
      </TableBody>
    </DataTable>
  );
};

export default Table;
