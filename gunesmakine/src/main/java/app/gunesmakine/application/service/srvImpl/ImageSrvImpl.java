package app.gunesmakine.application.service.srvImpl;

import app.gunesmakine.application.models.Image;
import app.gunesmakine.application.models.Product;
import app.gunesmakine.application.repositories.ImageRepository;
import app.gunesmakine.application.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ImageSrvImpl implements ImageService {

    private final ImageRepository repository;

    private final MongoTemplate mongoTemplate;

    public List<Image> createImages(List<Object> imgList) {

        List<Image> images = new ArrayList<>();

        for (Object l: imgList){
            Image image = repository.findByImagePath(((Image) l).getImagePath());

            image = Objects.isNull(image) ?
                    Image.builder().cDate(LocalDateTime.now()).imagePath(((Image) l).getImagePath())
                            .isShowCasePicture(((Image) l).isShowCasePicture()).build()
                    :
                    Image.builder().cDate(LocalDateTime.now()).imagePath(((Image) l).getImagePath())
                            .isShowCasePicture(((Image) l).isShowCasePicture())
                            .uDate(LocalDateTime.now()).build();

            repository.save(image);

            mongoTemplate.update(Product.class)
                    .matching(Criteria.where("id").is(((Product) l).getId()))
                    .apply(new Update().push("imageList").value(image))
                    .first();

            images.add(image);
        }
        return images;
    }
}
