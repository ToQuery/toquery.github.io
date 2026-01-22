export type ExampleProject = {
    name: string;
    description: string;
    url: string;
    language: string;
    stars: number;
};

export const exampleProjects: ExampleProject[] = [
    {
        name: "example-spring-sharding-sphere",
        description: "Spring Boot Jpa 读写分离、分库分表最佳实践",
        url: "https://github.com/ToQuery/example-spring-sharding-sphere",
        language: "Java",
        stars: 4,
    },
    {
        name: "example-spring-authorization-server",
        description: "OAuth2 认证授权服务",
        url: "https://github.com/ToQuery/example-spring-authorization-server",
        language: "Java",
        stars: 4,
    },
    {
        name: "example-wails",
        description: "Nice and modern wails sidebar (漂亮现代的 wails 侧边栏) react、tailwindcss",
        url: "https://github.com/ToQuery/example-wails",
        language: "TypeScript",
        stars: 0,
    },
    {
        name: "example-kong",
        description: "带你了解学习kong的使用",
        url: "https://github.com/ToQuery/example-kong",
        language: "Java",
        stars: 0,
    },
    {
        name: "example-spring-quartz",
        description: "Spring Quartz 示例",
        url: "https://github.com/ToQuery/example-spring-quartz",
        language: "Java",
        stars: 0,
    },
    {
        name: "example-spring-ai",
        description: "Spring AI 示例 项目",
        url: "https://github.com/ToQuery/example-spring-ai",
        language: "Java",
        stars: 0,
    },
    {
        name: "example-type-script",
        description: "TypeScript 示例",
        url: "https://github.com/ToQuery/example-type-script",
        language: "TypeScript",
        stars: 0,
    },
    {
        name: "example-spring-modulith",
        description: "Spring Modulith 示例",
        url: "https://github.com/ToQuery/example-spring-modulith",
        language: "Java",
        stars: 0,
    },
    {
        name: "example-wails-inside",
        description: "Wails 内嵌资源示例",
        url: "https://github.com/ToQuery/example-wails-inside",
        language: "TypeScript",
        stars: 0,
    }
];

export const allExamplesUrl = "https://github.com/ToQuery?tab=repositories&q=example-&type=&language=&sort=";
