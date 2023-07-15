"use client";

import Link from 'next/link';
import { 
  UncontrolledAccordion, 
  AccordionItem, 
  AccordionHeader, 
  AccordionBody, 
} from 'reactstrap';

const AccordionList = () => {
  return (
    <UncontrolledAccordion className="w-full p-0" >
      <AccordionItem className="border-0">
        <AccordionHeader targetId="1">Hardware</AccordionHeader>
        <AccordionBody accordionId="1" >
          <Link href="">Ola</Link>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem className="border-0 p-0">
        <AccordionHeader targetId="2">Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId="2">
          <Link href="">Ola</Link>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem className="border-0 p-0">
        <AccordionHeader targetId="3">Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId="3">
          <Link href="">Ola</Link>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem className="border-0 p-0">
        <AccordionHeader targetId="4">Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId="4">
          <Link href="">Ola</Link>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem className="border-0 p-0">
        <AccordionHeader targetId="5">Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId="5">
          <Link href="">Ola</Link>
        </AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  )
}

export default AccordionList