"use strict"

// 코트타입 체크
export function checkCourtType(courtTypeId) {
    switch (courtTypeId) {
        case 1:
            return '하드 코트'
        case 2:
            return '클레이 코트'
        case 3:
            return '잔디 코트'
        case 4:
            return '앙투카 코트'
    }
};

// 실내/외 체크
export function checkIndoor(indYn) {
    if (indYn) {
        return '실내';
    } else {
        return '야외'
    }
};

// 주차 가능 여부 체크
export function checkParking(parkingArea) {
    if (parkingArea) {
        return '주차 가능';
    } else {
        return '주차장 없음'
    }
};

// 라이트 유무 체크
export function checkLight(lightYn) {
    if (lightYn) {
        return '라이트 보유'
    } else {
        return '라이트 미보유'
    }
};

// 레벨 체크
export function checkLevel(lvId) {
    switch (lvId) {
        case 1:
            return 'DEVELOPMENT'
        case 2:
            return 'BEGINNER'
        case 3:
            return 'INTERMEDIATE'
        case 4:
            return 'ADVANCED'
        case 5:
            return 'PRO'
    }
}

// 레벨 체크하여 태그 리턴
export function levelTag(lvId) {
    switch (lvId) {
        case 1 : return `<span class="badge bg-secondary">DEVELOPMENT</span>`;
        case 2 : return `<span class="badge bg-success">BEGINNER</span>`;
        case 3 : return `<span class="badge bg-warning text-dark">INTERMEDIATE</span>`;
        case 4 : return `<span class="badge bg-primary">ADVANCED</span>`;
        case 5 : return `<span class="badge bg-danger">PRO</span>`;
    }
}