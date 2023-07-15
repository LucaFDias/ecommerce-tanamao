import { 
  Col, 
  Container, 
  Row 
} from "reactstrap";
import { motion } from "framer-motion";
import Image from "next/image";

import { AiFillApple } from "react-icons/ai"
import { FiRefreshCw } from "react-icons/fi";

import productImg01 from "@/app/assets/categories/apple-image.png"


const Brands = () => {
  const brandsData = [
    {
      icon: <AiFillApple size={58} />,
      bgIcon: "#FFFFFF",
      title: "IPhone",
      titleColor: "#FFFFFF",
      subtitle: "Up to 80% OFF",
      bg: "#313131",
      colorCard: "#494949",
      imgUrl: productImg01,
    },
    {
      icon: <FiRefreshCw size={32} />,
      bgIcon: "#FFC915",
      title: "Whatch",
      titleColor: "#313131",
      subtitle: "Up to 80% OFF",
      bg: "#FFF3CC",
      colorCard: "#F6DE8D",
      imgUrl: productImg01,
    },
    {
      icon: <AiFillApple size={58} />,
      bgIcon: "#FF6900",
      title: "Notebook",
      titleColor: "#313131",
      subtitle: "Up to 80% OFF",
      bg: "#FFECDF",
      colorCard: "#FFD1B0",
      imgUrl: productImg01,
    },
  ]

  return (
    <section>
      <Container>
        <Row>
          {brandsData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="
                py-3 px-4  
                flex items-center 
                justify-between 
                gap-x-3 
                rounded-lg 
                cursor-pointer 
                brands_container"
                style={{ background: `${item.bg}` }}
              >
                <div className="flex flex-col gap-y-4">
                  <div>
                    <span
                      className="py-1 px-3 rounded"
                      style={{
                        color: `${item.titleColor}`,
                        background: `${item.colorCard}`,
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <div
                    className="rounded flex items-center justify-center w-16 h-16 brands_icon"
                    style={{ background: `${item.bgIcon}` }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="brands_subtitle" style={{ color: `${item.titleColor}` }}>
                    {item.subtitle}
                  </h3>
                </div>
                <div>
                  <Image
                    src={item.imgUrl}
                    className="w-full h-[12rem] object-contain brands_img"
                    alt="Imagem do produto da categoria"
                  />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Brands;