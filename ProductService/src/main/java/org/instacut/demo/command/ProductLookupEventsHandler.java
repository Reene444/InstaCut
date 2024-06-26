package org.instacut.demo.command;


import org.axonframework.config.ProcessingGroup;
import org.axonframework.eventhandling.EventHandler;
import org.axonframework.eventhandling.ResetHandler;
import org.instacut.demo.core.data.ProductLookupEntity;
import org.instacut.demo.core.data.ProductLookupRepository;
import org.instacut.demo.core.event.ProductCreatedEvent;
import org.springframework.stereotype.Component;

@Component
@ProcessingGroup("product-group")
public class ProductLookupEventsHandler {
	
	private final ProductLookupRepository productLookupRepository;
	
	public ProductLookupEventsHandler(ProductLookupRepository productLookupRepository) {
		this.productLookupRepository = productLookupRepository;
	}

	@EventHandler
	public void on(ProductCreatedEvent event) {
		
		ProductLookupEntity productLookupEntity = new ProductLookupEntity(event.getProductId(),
				event.getTitle());
		
		productLookupRepository.save(productLookupEntity);
		
	}
	
	@ResetHandler
	public void reset() {
		productLookupRepository.deleteAll();
	}
	
}
