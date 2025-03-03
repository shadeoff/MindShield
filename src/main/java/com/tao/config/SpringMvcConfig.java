package com.tao.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@ComponentScan({"com.tao.controller","com.tao.config"})
@EnableWebMvc
public class SpringMvcConfig {
}
