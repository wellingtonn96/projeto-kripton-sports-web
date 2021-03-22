import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import { DataTable, TableHeader, TableBody, InputSearch } from './style';

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
            <InputSearch>
              <input type="text" />
              <button type="button">
                <FiSearch />
              </button>
            </InputSearch>
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
