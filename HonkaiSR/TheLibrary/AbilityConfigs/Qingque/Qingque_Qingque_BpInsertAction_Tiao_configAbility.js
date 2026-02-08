const configAbility = {
  "fileName": "Qingque_Qingque_BpInsertAction_Tiao",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Refresh QingQue Bar-State",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-202055066\">QingQue_Passive_Hu_Flag_Yu</a>"
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        {
          "name": "UI Display Event",
          "popUpText": "Celestial Jade"
        },
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}