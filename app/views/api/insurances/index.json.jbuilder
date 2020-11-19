@insurances.each do |insurance|
    json.set! insurance.id do
        json.partial! 'insurance', insurance: insurance
    end
end