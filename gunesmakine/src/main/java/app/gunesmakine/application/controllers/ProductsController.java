package app.gunesmakine.application.controllers;

import app.gunesmakine.application.service.ProductsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductsController {
    private final ProductsService productsService;

    public ProductsController(ProductsService productsService) {
        this.productsService = productsService;
    }

    @GetMapping("/findAll")
    public ResponseEntity<?> findAll(){
        return ResponseEntity.ok().body(productsService.findAll());
    }
}
