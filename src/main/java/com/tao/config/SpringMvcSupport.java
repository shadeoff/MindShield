package com.tao.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@Configuration
public class SpringMvcSupport extends WebMvcConfigurationSupport {
    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**").addResourceLocations("/");
        registry.addResourceHandler("css/**").addResourceLocations("/css/");
        registry.addResourceHandler("images/**").addResourceLocations("/images/");
        registry.addResourceHandler("js/**").addResourceLocations("/js/");
        registry.addResourceHandler("plugins/**").addResourceLocations("/plugins/");
    }
}
