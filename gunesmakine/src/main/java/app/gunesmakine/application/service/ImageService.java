package app.gunesmakine.application.service;

import app.gunesmakine.application.models.Image;

import java.util.List;

public interface ImageService {
    List<Image> createImages(List<Object> imgList);
}
