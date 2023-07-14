import { 
  Col, 
  Container, 
  Row 
} from "reactstrap";
import { motion } from "framer-motion";

import { LuPlane } from 'react-icons/lu';
import { FiRefreshCw } from "react-icons/fi";
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { RiSecurePaymentLine } from 'react-icons/ri';

const Services = () => {
  const serviceData = [
    {
      icon: <LuPlane size={32} />,
      title: "Free Shipping",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#fdefe6",
    },
    {
      icon: <FiRefreshCw size={32} />,
      title: "Easy Returns",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#ceebe9",
    },
    {
      icon: <RiSecurePaymentLine size={32} />,
      title: "Secure Payment",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#e2f2b2",
    },
    {
      icon: <FaRegMoneyBillAlt size={32}/>,
      title: " Back Guarantee",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#d6e5fb",
    },
  ]

  return (
    <section className="services">
      <Container>
        <Row>
          {
            serviceData.map((item, index) => (
              <Col lg="3" md="4" key={index}>
                <motion.div whileHover={{ scale: 1.1}}
                  className="py-3 px-4 bg-fuchsia-200 flex items-center gap-x-3 rounded-md cursor-pointer"
                  style={{background: `${item.bg}`}}
                >
                  <span className="bg-black text-white rounded-full p-2">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm mt-1 text-[#222]">{item.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Services