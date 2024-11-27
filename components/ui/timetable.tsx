import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const TimeTable = () => {
  return (
       <Table>
  <TableCaption></TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>
        <div className="text-left flex items-center space-x-4">
          <p>Exam Name</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
        </div>
        </TableHead>
        <TableHead>
          <div className="text-left flex items-center space-x-4">
            <p>Course</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
          </div>
        </TableHead>
        <TableHead>
          <div className="text-left flex items-center space-x-4">
            <p>Date</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
          </div>
        </TableHead>
        <TableHead>
          <div className="text-left flex items-center space-x-4">
            <p>Time</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
          </div>
        </TableHead>
        <TableHead>
          <div className="text-left flex items-center space-x-4">
            <p>Location</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
          </div>
        </TableHead>
        <TableHead>
          <div className="text-left flex items-center space-x-4">
            <p>Action</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
          </div>
        </TableHead>
        <TableHead>
          <div className="text-left flex items-center space-x-4">
            <p>Status</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
          </div>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow className="bg-blue-100">
        <TableCell className="font-medium text-left">English</TableCell>
        <TableCell className="text-left">ART101</TableCell>
        <TableCell className="text-left">Jan 25,2024</TableCell>
        <TableCell className="text-left">10:00 AM</TableCell>
        <TableCell className="text-left">Design Studio A</TableCell>
        <TableCell className="text-left">edit/delete</TableCell>
        <TableCell>
          <div className="text-left flex items-center text-left space-x-4">
            <span className="text-red-400 lato-bold p-[0.05rem] bg-red-100 w-[50%] text-center">Completed</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </div>

          </TableCell>
      </TableRow>
      <TableRow className="">
        <TableCell className="font-medium text-left">Digital Illustration</TableCell>
        <TableCell className="text-left">ART103</TableCell>
        <TableCell className="text-left">Feb 5,2024</TableCell>
        <TableCell className="text-left">02:00 PM</TableCell>
        <TableCell className="text-left">Computer lab 2 </TableCell>
        <TableCell className="text-left">edit/delete</TableCell>
        <TableCell>
          <div className="text-left flex items-center text-left space-x-4">
            <span className="text-red-400 lato-bold p-[0.05rem] bg-red-100 w-[50%] text-center">Completed</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </div>

          </TableCell>
      </TableRow>

      <TableRow className="bg-blue-100">
        <TableCell className="font-medium text-left">History of Design Essay</TableCell>
        <TableCell className="text-left">ART101</TableCell>
        <TableCell className="text-left">APR 2,2024</TableCell>
        <TableCell className="text-left">1:00 PM</TableCell>
        <TableCell className="text-left">Design Lab 1</TableCell>
        <TableCell className="text-left">edit/delete</TableCell>
        <TableCell>
          <div className="text-left flex items-center text-left space-x-4">
            <span className="text-blue-800 lato-bold p-[0.05rem] bg-blue-200 w-[50%] text-center">Upcoming</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </div>

          </TableCell>
      </TableRow>

      <TableRow className="">
        <TableCell className="font-medium text-left">English</TableCell>
        <TableCell className="text-left">ART101</TableCell>
        <TableCell className="text-left">Jan 25,2024</TableCell>
        <TableCell className="text-left">10:00 AM</TableCell>
        <TableCell className="text-left">Lecture Hall B</TableCell>
        <TableCell className="text-left">edit/delete</TableCell>
        <TableCell className="text-left">
        <div className="text-left flex items-center text-left space-x-4">
            <span className="text-blue-800 lato-bold p-[0.05rem] bg-blue-200 w-[50%] text-center">Upcoming</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </div>
        </TableCell>
      </TableRow>

      <TableRow className="bg-blue-100">
        <TableCell className="font-medium text-left">English</TableCell>
        <TableCell className="text-left">ART101</TableCell>
        <TableCell className="text-left">Jan 25,2024</TableCell>
        <TableCell className="text-left">10:00 AM</TableCell>
        <TableCell className="text-left">Prototype lab</TableCell>
        <TableCell className="text-left">edit/delete</TableCell>
        <TableCell className="text-left">
        <div className="text-left flex items-center text-left space-x-4">
            <span className="text-blue-800 lato-bold p-[0.05rem] bg-blue-200 w-[50%] text-center">Upcoming</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </div>
        </TableCell>
      </TableRow>

      <TableRow className="">
        <TableCell className="font-medium text-left">English</TableCell>
        <TableCell className="text-left">ART101</TableCell>
        <TableCell className="text-left">Jan 25,2024</TableCell>
        <TableCell className="text-left">10:00 AM</TableCell>
        <TableCell className="text-left">Design Studio B</TableCell>
        <TableCell className="text-left">edit/delete</TableCell>
        <TableCell className="text-left">
        <div className="text-left flex items-center text-left space-x-4">
            <span className="text-blue-800 lato-bold p-[0.05rem] bg-blue-200 w-[50%] text-center">Upcoming</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </div>
        </TableCell>
      </TableRow>

      <TableRow className="bg-blue-100">
        <TableCell className="font-medium text-left">English</TableCell>
        <TableCell className="text-left">ART101</TableCell>
        <TableCell className="text-left">Jan 25,2024</TableCell>
        <TableCell className="text-left">10:00 AM</TableCell>
        <TableCell className="text-left">Design Studio B</TableCell>
        <TableCell className="text-left">edit/delete</TableCell>
        <TableCell className="text-left">
        <div className="text-left flex items-center text-left space-x-4">
            <span className="text-blue-800 lato-bold p-[0.05rem] bg-blue-200 w-[50%] text-center">Upcoming</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </div>
        </TableCell>
      </TableRow>

    </TableBody>
  </Table>
  )
}
export default TimeTable