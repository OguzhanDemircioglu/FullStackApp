package app.gunesmakine.application.service.srvImpl;

import app.gunesmakine.application.models.Product;
import app.gunesmakine.application.repositories.ProductRepository;
import app.gunesmakine.application.service.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductSrvImpl implements ProductsService {

    private final ProductRepository productRepository;

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }
}
