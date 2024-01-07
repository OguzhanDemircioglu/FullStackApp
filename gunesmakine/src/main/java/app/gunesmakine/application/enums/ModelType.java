package app.gunesmakine.application.enums;

public enum ModelType {
    VOLVO(0),
    MERCEDES(1),
    PEGO(2);

    private final int value;

    ModelType(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
