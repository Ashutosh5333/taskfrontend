import { Box, CircularProgress } from '@chakra-ui/react'
import React from 'react'

const CircleLoading = () => {


  return (
    <>
     <Box>
     <CircularProgress value={80} />
     </Box>
    </>
  )
}

export default CircleLoading