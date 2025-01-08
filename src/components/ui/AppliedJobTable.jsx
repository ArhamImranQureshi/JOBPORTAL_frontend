import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './table'
import { Badge } from './badge'

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            [1,2].map((item,index)=>(
              <TableRow  key={index}>
                <TableCell>08-01-2024</TableCell>
                <TableCell>Frontend-Developer</TableCell>
                <TableCell>10Pearls</TableCell>
                <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
