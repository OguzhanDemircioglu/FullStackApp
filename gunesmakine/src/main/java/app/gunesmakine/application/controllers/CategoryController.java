package app.gunesmakine.application.controllers;

import app.gunesmakine.application.core.utilities.results.Result;
import app.gunesmakine.application.models.Category;
import app.gunesmakine.application.service.CategoryService;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/category")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/save")
    public Result save(@RequestBody Category category){
       return categoryService.save(category);
    }
}
