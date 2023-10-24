create table Jurusan(
    id_jurusan varchar(5) primary key not null,
    jurusan varchar(100)not null
);
insert into  jurusan(id_jurusan,jurusan)values
-- ("J01","Sistem Informatika"),
("J02","Teknik Informatika"),
("J03","Teknik Elektro");


create table Mahasiswa(
    nim varchar(5) primary key not null,
    nama varchar(100) not null ,
    alamat text not null,
    id_jurusan varchar(5)not null,
    foreign key (id_jurusan) references jurusan(id_jurusan)
);

insert into Mahasiswa(nim,nama,alamat,id_jurusan)values
("N01","Fatih Princardi","Bekasi","J01"),
("N02","Ahmad Khaironi Adifta","Bekasi","J01"),
("N03","Sulthan Rizal","Bogor","J02"),
("N04","Gladwin Mustafa","Jakarta","J02"),
("N05","Andri Priyadi","Bandung","J03"),
("N06","Jovinto ","Bogor","J03");

create table Dosen(
    nip varchar(5) primary key not null,
    nama_dosen varchar(100)not null,
    id_jurusan varchar(5)not null,
    foreign key (id_jurusan)references jurusan(id_jurusan);
);

insert into Dosen(nip,nama_dosen,id_jurusan)values
("D01","Oki Ramdhani","J01"),
("D02","Suci Fadillah","J01"),
("D03","Nurul Utami","J01"),
("D04","Yulia Dini Astuti","J01"),
("D05","Penny","J02"),
("D06","Firman Rusdiansyah","J02"),
("D07","Ahmad Bayhaqi","J02"),
("D08","Elvan","J02"),
("D09","Bu Hari","J03"),
("D10","Bu Arsya","J03"),
("D11","Edi YP","J03"),
("D12","Sachio","J03");


create table MataKuliah(
    id_Matkul varchar(5) primary key not null,
    nama_Matkul varchar(100)not null,
    sks integer not null;
);

insert into MataKuliah(id_Matkul,nama_Matkul,sks)values
("M01","Metode Numerik","3"),
("M02","Aljabar","2"),
("M03","Diferensial","2"),
("M04","Kalkulus","3"),
("M05","Pengantar Informatika","4"),
("M06","Algoritma","4"),
("M07","Termodika","2"),
("M08","Sastra Rusia","3"),
("M09","Ilmu Komunikasi","3"),
("M010","Rekayasa Perangkat Lunak","2"),
("M011","Arsitektur Dan Jaringan Komputer","3"),
("M012","Manajemen Cerdas Informasi","2");


create table Kontrak(
    id_Kontrak varchar(5)primary key not null,
    nim varchar(5)not null,
    id_jurusan varchar(5) not null,
    nip varchar(5) not null,
    id_Matkul varchar(5) not null,
    nilai  varchar(1) not null,
    foreign key (nim) references mahasiswa(nim),
    foreign key (id_jurusan)references jurusan(id_jurusan),
    foreign key (nip) references dosen(nip),
    foreign key (id_Matkul)references MataKuliah(id_Matkul);
);

insert into Kontrak(id_Kontrak,nim,id_jurusan,nip,id_Matkul,nilai)values
("K01","N01","J01","D01","M01","A"),
("K02","N01","J01","D02","M02","B"),
("K03","N02","J01","D03","M03","A"),
("K04","N02","J01","D04","M04","C"),
("K05","N03","J02","D05","M05","A"),
("K06","N03","J02","D06","M06","B"),
("K07","N04","J02","D07","M07","D"),
("K08","N04","J02","D08","M08","C"),
("K09","N05","J03","D09","M09","A"),
("K10","N05","J03","D10","M10","A"),
("K11","N06","J03","D11","M11","E"),
("K12","N06","J03","D12","M12","B"),
("K13","N01","J01","D01","M01","D"),
("K14","N01","J01","D02","M02","A"),
("K15","N02","J01","D03","M03","E"),
("K16","N02","J01","D04","M04","D"),
("K17","N03","J02","D05","M05","B"),
("K18","N03","J02","D06","M06","B"),
("K19","N04","J02","D07","M07","E"),
("K20","N04","J02","D08","M08","A"),
("K21","N05","J03","D09","M09","A"),
("K22","N05","J03","D10","M10","D");

alter table Mahasiswa ADD Lahir Date;


UPDATE mahasiswa SET Lahir="2005-01-23" WHERE nim="N01";
UPDATE mahasiswa SET Lahir="1996-06-26" WHERE nim="N02";
UPDATE mahasiswa SET Lahir="2005-02-12" WHERE nim="N03";
UPDATE mahasiswa SET Lahir="2004-10-11" WHERE nim="N04";
UPDATE mahasiswa SET Lahir="1995-11-02" WHERE nim="N05";
UPDATE mahasiswa SET Lahir="2003-02-28" WHERE nim="N06";

.header on
.mode column

-- Soal 1 
select *,(select jurusan from jurusan where jurusan.id_jurusan=Mahasiswa.id_jurusan)as jurusan from Mahasiswa;

-- Soal 2 
select *,date("now")-date(lahir)as umur from Mahasiswa where umur<20;

-- Soal 3 
select distinct nim,(select nama from Mahasiswa where mahasiswa.nim=Kontrak.nim)as nama from Kontrak where nilai<="B";

-- Soal 4
select nim(select nama from Mahasiswa where mahasiswa.nim = Kontrak.nim)as nama,sum((select sks from MataKuliah where MataKuliah.id_Matkul=Kontrak.id_Matkul))as sks from Kontrak group by nim having sks<10;

-- Soal 5 
select nim, (select nama from Mahasiswa where Mahasiswa.nim=Kontrak.nim) as nama from Kontrak where id_Matkul="M07";

-- soal 6 
select *,(select count(distinct nim)from Kontrak where Kontrak.nip=Dosen.nip)as jumlah_Mahasiswa from Dosen;

-- soal 7
select *,date("now")-date(lahir)as umur from Mahasiswa order by umur;

-- soal 8
select * from kontrak join Mahasiswa on Kontrak.nim=Mahasiswa.nim join jurusan on Kontrak.id_jurusan=jurusan.id_jurusan join Dosen on Kontrak.nip=Dosen.nip where nilai>="D";


