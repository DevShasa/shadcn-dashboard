import React from 'react'
import { mockPayments } from '@/lib/mock-data'
import { Payment } from '@/lib/types'
import { DataTable } from './data-table'
import {columns} from "./columns"

const getData = async():Promise<Payment[]> =>{
    return mockPayments
}

const Payments = async() => {

    const data = await getData();

  return (
    <div>
        <div className='mb-8 px-4 py-2 rounded-md bg-secondary'>
            <h1 className='font-semibold '>
                All Payments
            </h1>
            <DataTable columns={columns} data={data}/>
        </div>
    </div>
  )
}

export default Payments