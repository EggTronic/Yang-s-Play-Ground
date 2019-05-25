import csv
count = {'zero':0,'null':0,'negative':0}

def read_data(filename):
    data = {}
    new_data = {}
    with open(filename) as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            ID = row['ID']
            del row['ID']
            for key in row:
                if row[key].lower() == 'zero':
                    count['zero'] += 1
                    row[key] = 0
                elif row[key].lower() == 'null':
                    count['null'] += 1
                    row[key] = 0
                elif row[key].startswith('-') and row[key][-1:].isdigit():
                    count['negative'] += 1
                    row[key] = -int(row[key])
            data[ID]=row
            new_data[ID] = dict(list(row.items()))
    return new_data

filename = './csv.csv'
data = read_data(filename)
print(data)
print('================================================================================================================')
print('=================================== ',count,' ===================================')
print('================================================================================================================')