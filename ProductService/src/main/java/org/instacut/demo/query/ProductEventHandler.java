package org.instacut.demo.query;

import com.fasterxml.jackson.databind.util.BeanUtil;
import org.axonframework.eventhandling.EventHandler;
import org.instacut.demo.core.data.Product;
import org.instacut.demo.core.data.ProductRepository;
import org.instacut.demo.core.event.ProductCreatedEvent;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class ProductEventHandler {

    private final ProductRepository productRepository;

    public ProductEventHandler(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @EventHandler
    public void on(ProductCreatedEvent event){
        Product product=new Product();
        BeanUtils.copyProperties(event,product);
        productRepository.save(product);
    }
}
