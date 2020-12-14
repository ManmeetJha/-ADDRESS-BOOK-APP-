package com.cg.addressbook.model;
import javax.persistence.*;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "address_book")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "full_name")
    @Pattern(regexp = "^[a-zA-Z][a-zA-Z0-9]*$", message = "incorrect first name")
    private String full_name;
    @Column(name = "address")
    private String address;
    @Column(name = "city")
    private String city;
    @Column(name = "state")
    private String state;
    @Column(name = "zip")
    private int zip;
    @Column(name = "phone_no")
    private double phone_no;

    public Address(String full_name, String address, String city, String state, int zip, double phone_no) {
        this.full_name = full_name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone_no = phone_no;
    }

    public Address() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public double getPhone_no() {
        return phone_no;
    }

    public void setPhone_no(double phone_no) {
        this.phone_no = phone_no;
    }
}
