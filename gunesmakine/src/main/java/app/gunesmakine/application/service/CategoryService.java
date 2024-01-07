package app.gunesmakine.application.service;

import app.gunesmakine.application.core.utilities.results.Result;
import app.gunesmakine.application.models.Category;

import java.util.Map;

public interface CategoryService {
    Result save(Category category);
}
