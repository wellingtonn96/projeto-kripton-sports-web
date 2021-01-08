import React from 'react';

import { FiUser } from 'react-icons/fi';

import {
  CardContainer,
  Card,
  DataTable,
  TableHeader,
  TableBody,
} from './style';

import TableAction from './TableAction';

const Dashboard: React.FC = () => {
  return (
    <>
      <CardContainer>
        <Card>
          <div>
            <p>2050</p>
            <p>Orders</p>
          </div>
          <div>
            <span>
              <FiUser />
            </span>
          </div>
        </Card>
        <Card>
          <div>
            <p>2050</p>
            <p>Orders</p>
          </div>
          <div>
            <span>
              <FiUser />
            </span>
          </div>
        </Card>
        <Card>
          <div>
            <p>2050</p>
            <p>Orders</p>
          </div>
          <div>
            <span>
              <FiUser />
            </span>
          </div>
        </Card>
        <Card>
          <div>
            <p>2050</p>
            <p>Orders</p>
          </div>
          <div>
            <span>
              <FiUser />
            </span>
          </div>
        </Card>
      </CardContainer>

      <DataTable>
        <TableHeader>
          <h1>Product Sales</h1>
        </TableHeader>
        <TableBody>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Photo</th>
                  <th>Product ID</th>
                  <th>Status</th>
                  <th>Shipping</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tr>
                <td>Iphone 5</td>
                <td>image</td>
                <td>#9405822</td>
                <td>Paid</td>
                <td>dsfsd</td>
                <td>$ 1250.00</td>
                <td>03 Aug 2017</td>
                <TableAction />
              </tr>
              <tr>
                <td>Iphone 5</td>
                <td>image</td>
                <td>#9405822</td>
                <td>Paid</td>
                <td>dsfsd</td>
                <td>$ 1250.00</td>
                <td>03 Aug 2017</td>
                <TableAction />
              </tr>
              <tr>
                <td>Iphone 5</td>
                <td>image</td>
                <td>#9405822</td>
                <td>Paid</td>
                <td>dsfsd</td>
                <td>$ 1250.00</td>
                <td>03 Aug 2017</td>
                <TableAction />
              </tr>
              <tr>
                <td>Iphone 5</td>
                <td>image</td>
                <td>#9405822</td>
                <td>Paid</td>
                <td>dsfsd</td>
                <td>$ 1250.00</td>
                <td>03 Aug 2017</td>
                <TableAction />
              </tr>
            </table>
          </div>
        </TableBody>
      </DataTable>
    </>
  );
};

export default Dashboard;
