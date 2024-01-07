package app.gunesmakine.application.controllers;

import app.gunesmakine.application.core.utilities.results.Result;
import app.gunesmakine.application.models.Category;
import app.gunesmakine.application.service.CategoryService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/category")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping("/save")
    public Result save(@RequestBody Category category){
       return categoryService.save(category);
    }
}
