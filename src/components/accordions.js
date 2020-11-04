import React from 'react'
import { Accordion } from 'semantic-ui-react';

const AccordionContent = (content) => (
  <div className="indent">
    {content}
  </div>
)

const SubAccordion1Panels = [
  {
    title: 'Sub Accordion 11',
    content: { content: AccordionContent('11 Content'), key: '11-content'} ,
    key: 'sub-accordion-11'
  }, {
    title: 'Sub Accordion 12',
    content: { content: AccordionContent('12 Contents'), key: '12-content' },
    key: 'sub-accordion-12'
  }, {
    title: 'Sub Accordion 13',
    content: { content: AccordionContent('13 Contents'), key: '13-content' },
    key: 'sub-accordion-13'
  },
]

const SubAccordion1Content = (
  <div className="indent">
    <Accordion.Accordion
      style={{marginLeft: "20px"}}
      className="no-padding"
      panels={SubAccordion1Panels}
    />
  </div>
)

const SubAccordionPanels = [
  {
    title: 'Sub Accordion 1',
    content: { content: SubAccordion1Content, key: 'sa1-content' },
    key: 'sub-accordion-1'
  }, {
    title: 'Sub Accordion 2',
    content: { content: AccordionContent('SA2 Content'), key: 'sa2-content' },
    key: 'sub-accordion-2'
  }, {
    title: 'Sub Accordion 3',
    content: { content: AccordionContent('SA3 Content'), key: 'sa3-content' },
    key: 'sub-accordion-3'
  }
]

const SubAccordions = (
  <div className="indent">
    <Accordion.Accordion
      className="no-padding"
      panels={SubAccordionPanels}
    />
  </div>
)

const AccordionPanels = [
  { title: 'Accordion', content: { content: SubAccordions, key: 'sub-accordions' } },
]

const AccordionExampleNested = () => (
  <Accordion
    defaultActiveIndex={0}
    panels={AccordionPanels}
  />
)

export default AccordionExampleNested