package app.gunesmakine.application.service.srvImpl;

import app.gunesmakine.application.core.utilities.results.ErrorResult;
import app.gunesmakine.application.core.utilities.results.Result;
import app.gunesmakine.application.core.utilities.results.SuccessResult;
import app.gunesmakine.application.models.Category;
import app.gunesmakine.application.repositories.CategoryRepository;
import app.gunesmakine.application.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class CategorySrvImpl implements CategoryService {
    private final CategoryRepository categoryRepository;

    @Override
    public Result save(Category category) {
        if (category.getName()==null) {
            return new ErrorResult("Category null");
        }
        boolean b = categoryRepository.existsByName(category.getName());
        if (b) {
            return new ErrorResult("Category Already Exist.");
        }
        if (category == null) {
            return new ErrorResult("Category Null.");
        }
        Category save = categoryRepository.save(category);
        return new SuccessResult("Category Saved.");
    }
}
