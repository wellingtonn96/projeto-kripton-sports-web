import React from 'react'

import { FiUser } from 'react-icons/fi'

import BarChart from '../../components/charts/BarChart'
import DonutChart from '../../components/charts/DonutChart'

import DefaultLayout from '../_layouts/DefaultLayout'

import './style.css'

export default function Dashboard() {
	return (
		<DefaultLayout>
			<div>
				<div className="row">
					<div className="card-item">
						<div>
							<p className="card-total">2050</p>
							<p className="card-title">Orders</p>
						</div>
						<div className="card-icon">
							<span className="card-icon">
								<FiUser />
							</span>
						</div>
					</div>
					<div className="card-item">
						<div>
							<p className="card-total">2050</p>
							<p className="card-title">Orders</p>
						</div>
						<div className="card-icon">
							<span className="card-icon">
								<FiUser />
							</span>
						</div>
					</div>
					<div className="card-item">
						<div>
							<p className="card-total">2050</p>
							<p className="card-title">Orders</p>
						</div>
						<div className="card-icon">
							<span className="card-icon">
								<FiUser />
							</span>
						</div>
					</div>
					<div className="card-item">
						<div>
							<p className="card-total">2050</p>
							<p className="card-title">Orders</p>
						</div>
						<div className="card-icon">
							<span className="card-icon">
								<FiUser />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="card col-6">
					<div className="card-header">Top Selling Categories</div>
					<div className="card-body">
						<span className="chart">
							<BarChart />
						</span>
					</div>
				</div>
				<div className="card col-6">
					<div className="card-header">Top Selling Categories</div>
					<div className="card-body">
						<span className="chart">
							<DonutChart />
						</span>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="card-table col-12">
					<div className="card-header">Product Sales</div>
					<div className="card-body ">
						<div className="table-content">
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
								</tr>
								<tr>
									<td>Iphone 5</td>
									<td>image</td>
									<td>#9405822</td>
									<td>Paid</td>
									<td>dsfsd</td>
									<td>$ 1250.00</td>
									<td>03 Aug 2017</td>
								</tr>
								<tr>
									<td>Iphone 5</td>
									<td>image</td>
									<td>#9405822</td>
									<td>Paid</td>
									<td>dsfsd</td>
									<td>$ 1250.00</td>
									<td>03 Aug 2017</td>
								</tr>
								<tr>
									<td>Iphone 5</td>
									<td>image</td>
									<td>#9405822</td>
									<td>Paid</td>
									<td>dsfsd</td>
									<td>$ 1250.00</td>
									<td>03 Aug 2017</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	)
}
