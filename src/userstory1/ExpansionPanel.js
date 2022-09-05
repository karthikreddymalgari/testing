import React from 'react'

const ExpansionPanel = () => {
  return (
    <div><Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Accordion 1</Typography>
    </AccordionSummary>
    {/* <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails> */}
  </Accordion></div>
  )
}

export default ExpansionPanel