create table mahasiswa(
    nim character(3) primary key not null,
    nama varchar(100) not null,
    alamat text not null,
    id_jurusan varchar(10) not null,
    foreign key(id_jurusan) references jurusan (id_jurusan);
);

insert into mahasiswa(nim,nama,alamat,id_jurusan) values
("N01","SuLthan Rizal","Bogor","A1"),
("N02","Amirul Luthfi","Jakarta","A2"),
("N03","Adifahmad","Bekasi","A3");

select * from mahasiswa;


create table jurusan(
    id_jurusan varchar(10) primary key not null,
    nama_jurusan varchar(100) not null
);

insert into jurusan(id_jurusan,nama_jurusan) values
("A1","Teknik Informatik"),
("A2","Teknik Elektro"),
("A3","Sistem Informasi");

select * from jurusan ;

create table matakuliah(
    id_Matkul character(3) primary key not null ,
    nama_Matkul varchar(100) not null ,
    sks integer (5) not null
);

insert into matakuliah(id_Matkul,nama_Matkul,sks)values
("M01","Rekayasa Perangkat Lunak","20"),
("M02","Algoritma dan Pemograman","19"),
("M03","Basis Data","19")

select * from matakuliah;


create table dosen(
    id_dosen character(3) primary key not null,
    nama varchar(100) not null
);

insert into dosen(id_dosen,nama) values
("D01","Andri"),
("D02","Alvian"),
("D03","Rizky");

select * from dosen;


create table hasilBelajar(
    id_hasil integer primary key in autoincrement,
    nim character(3) not null,
    id_Matkul character(3) not null,
    id_dosen character(3) not null ,
    nilai varchar(5) not null ,
    foreign key (nim) references mahasiswa(nim),
    foreign key (id_Matkul) references matakuliah(id_Matkul),
    foreign key (id_dosen) references dosen(id_dosen)
);

insert into hasilBelajar(nim,id_Matkul,id_dosen,nilai)values
("N01","M01","D01","A+"),
("N01","M02","D02","B+"),
("N02","M01","D01","A"),
("N02","M02","D02","B-"),
("N03","M02","D02","B+"),
("N03","M03","D03","A");

select * from HasilBelajar;

