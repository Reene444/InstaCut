package org.instacut.demo.core.data;

import org.instacut.demo.core.data.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,String> {
    Product findByProductId(String productId);
    Product findByProductIdOrTitle(String productId, String title);
}
