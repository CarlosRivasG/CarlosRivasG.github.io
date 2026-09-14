import { useRef } from "react";
import { useInView } from "motion/react";
const text =
  "JAVA / SPRING BOOT / NODE.JS / NESTJS / TYPESCRIPT / REACT / NEXT.JS / PYTHON / DJANGO / POSTGRESQL / GRAPHQL / KAFKA / DOCKER / ";
export default function TechMarquee() {
  const ref = useRef(null),
    visible = useInView(ref);
  return (
    <div
      className="tech-marquee"
      ref={ref}
      aria-label="Technologies: Java, Spring Boot, Node.js, NestJS, TypeScript, React, Next.js, Python, Django, PostgreSQL, GraphQL, Kafka, Docker"
    >
      <div
        style={{ animationPlayState: visible ? "running" : "paused" }}
        aria-hidden="true"
      >
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
